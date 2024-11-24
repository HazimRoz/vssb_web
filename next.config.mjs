/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply headers to all routes
          headers: [
            {
              key: "Content-Security-Policy",
              value: `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                img-src 'self' data: https:;
                font-src 'self' https://fonts.gstatic.com;
                connect-src 'self' https://api.example.com;
                frame-src 'self' https://www.youtube.com;
                object-src 'none';
                base-uri 'self';
                form-action 'self';
                frame-ancestors 'none';
              `.replace(/\n/g, ""), // Replace new lines with a space
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  