import Breadcrumb from "@/components/Blog/Breadcrumb"
import Section2 from "@/components/Section2"


const page = () => {

    const text = 'Vestibulum elementum leo mi, vel imperdiet mi mattis at. Curabitur auctor cursus rhoncus. Duis hendrerit ipsum quis neque fringilla'

    return <>

        <Breadcrumb heading={'Travel'} text={text} />
        <Section2 />

    </>
}

export default page