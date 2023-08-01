import Main from "@/components/main/main"

const Home = () => {

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Main />
        </div>
      </section>
    </>
  )
}

export default Home