import CreatePost from "@components/CreatePost"
import GitBtn from "@components/GitBtn"

const page = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div>
        <h1 className="text-white text-[42px] text-center">Create</h1>
        <p className="mt-2 text-[#b9c4ce] text-[14px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <GitBtn />
      <CreatePost />
    </section>
  )
}

export default page