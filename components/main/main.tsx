import Link from "next/link"
import Animation from "../animations/animation"

const Main = () => {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요,
                    <br className="hidden lg:inline-block" />신입개발자 강찬수입니다
                </h1>
                <p className="mb-8 leading-relaxed">청춘에서만 같이, 가는 이상을 따뜻한 사랑의 있는 노년에게서 실현에 교향악이다. 수 품에 속에서 피다. 노년에게서 천고에 지혜는 몸이 들어 곳이 부패뿐이다. 석가는 풀밭에 눈이 얼마나 대중을 실현에 설산에서 가슴이 그림자는 있으랴? 살 기쁘며, 타오르고 되는 있음으로써 오아이스도 쓸쓸한 가진 운다. 하여도 우리 인간의 가는 인류의 우리의 우리 위하여서. 것이 돋고, 있는 인생을 놀이 오직 우리의 공자는 끓는 것이다. 같이, 하여도 피어나기 커다란 청춘은 무엇을 있으랴? 석가는 안고, 방황하였으며, 실현에 튼튼하며, 있으랴? 이것이야말로 위하여, 사라지지 하는 현저하게 목숨을 위하여서.</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">프로젝트 보러가기</button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    )
}

export default Main