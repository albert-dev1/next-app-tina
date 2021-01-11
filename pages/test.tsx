import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'

export default function Test({ jsonFile }) {
    // Create the Form
    const [homePage, homePageForm] = useJsonForm(jsonFile)

    // Register it with the CMS
    usePlugin(homePageForm)

    return <h1>{homePage.title}</h1>
}

export async function getStaticProps() {
    const content = await import(`../content/test.json`)

    return {
        props: {
            jsonFile: {
                fileRelativePath: `/content/test.json`,
                data: content.default,
            },
        },
    }
}
