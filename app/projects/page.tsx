import { DATABASE_ID, TOKEN } from "@/config";

const getData = async () => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ page_size: 100 })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Projects = async () => {
    const response = await getData()

    const projectNames = response.results.map((v: any) => (
        v.properties.이름.title
    ))

    console.log(1)
    return (
        <div>
            총 프로젝트 : {
                projectNames.map((v: any) => <div>
                    {v[0].text.content}
                </div>)
            }
        </div>
    )
}

export default Projects