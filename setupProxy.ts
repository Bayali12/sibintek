import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy(app: any) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://www.cbr-xml-daily.ru/daily_utf8.xml',
      changeOrigin: true,
    }),
  );
}
