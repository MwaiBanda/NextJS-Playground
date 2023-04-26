import { type NextPage } from "next";
import 'swagger-ui-react/swagger-ui.css';
import dynamic from "next/dynamic"

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

const Docs: NextPage = () => {
    return <>
    <SwaggerUI url='api/openapi.json' />;
    </>
};

export default Docs;