import ProjectItem from "@/components/projects/project-item";
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

    const projectNames = response.results

    return (
        <>
            <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10 sm:w-full">
                {
                    projectNames.map((v: any, idx: number) => (
                        <ProjectItem key={idx} data={v} />
                    ))
                }
            </div>
        </>
    )
}

export default Projects