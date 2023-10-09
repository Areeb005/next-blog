import Breadcrumb from '@/components/Blog/Breadcrumb'
import Form from '@/components/Blog/form'

export default function Page() {

    const text = 'Add Blog to the website and make it beautiful'

    return <>
        <Breadcrumb heading={'Add Blog'} text={text} />

        <div className='py-12'>
            <Form />
        </div>
    </>

}