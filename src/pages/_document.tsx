import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
interface PageDocumentProps {
  __NEXT_DATA__: {
    props: any;
  };
}
export default function PageDocument({
  __NEXT_DATA__: {
    props,
  },
}: PageDocumentProps) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
PageDocument.getInitialProps = async (ctx: DocumentContext) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          return styledComponentsSheet.collectStyles(<App {...props} />);
        },
      });
    const initialProps = await Document.getInitialProps(ctx);
    initialProps.styles = [
      initialProps.styles,
      styledComponentsSheet.getStyleElement(),
    ];
    return initialProps;
  } finally {
    styledComponentsSheet.seal();
  }
};