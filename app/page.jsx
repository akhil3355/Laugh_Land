import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Welcome to LaughLand!
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        Your Gateway to Endless Laughter!
      </span>
    </h1>
    <p className="desc text-center">
      LaughLand is your ultimate destination for all things funny, witty, and
      downright hilarious. Share your favorite jokes, and spread the contagious
      joy of laughter.
    </p>

    <Feed />
  </section>
);

export default Home;
