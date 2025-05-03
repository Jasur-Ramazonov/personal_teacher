const Writing = () => {
  return (
    <div className="p-2 flex flex-col gap-5">
      <p className="text-center w-full text-3xl font-semibold mb-5">Writing</p>
      <p className="w-full text-center text-xl font-semibold">
        Topic: Some people think that learning English online is more effective
        than learning in a classroom. Do you agree or disagree? Give reasons for
        your answer
      </p>
      <form>
        <textarea
          className="resize-none h-[200px] w-full p-2 rounded-md border"
          placeholder="Write here..."
        ></textarea>
      </form>
    </div>
  );
};

export default Writing;
