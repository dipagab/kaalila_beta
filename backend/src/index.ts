export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Encrypted-Yw-ID, X-Is-Login, X-Project-Id, X-Yw-Env',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json() as any;
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Save to D1
        const stmt = env.DB.prepare(
          'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)'
        );
        await stmt.bind(name, email, subject, message).run();

        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

      } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      try {
        const body = await request.json() as any;
        const { email } = body;

        if (!email) {
          return new Response(JSON.stringify({ error: 'Email is required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        // Save to D1
        try {
          const stmt = env.DB.prepare(
            'INSERT INTO subscribers (email) VALUES (?)'
          );
          await stmt.bind(email).run();
        } catch (e: any) {
          // Handle unique constraint violation
          if (e.message.includes('UNIQUE constraint failed')) {
             return new Response(JSON.stringify({ success: true, message: 'Already subscribed' }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
          }
          throw e;
        }

        return new Response(JSON.stringify({ success: true }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

      } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  }
};
