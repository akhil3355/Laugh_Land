import Joke from "@models/joke";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const joke = await Joke.findById(params.id).populate("creator");
    if (!joke) return new Response("Joke Not Found", { status: 404 });

    return new Response(JSON.stringify(joke), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { joke, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingJoke = await Joke.findById(params.id);

    if (!existingJoke) {
      return new Response("Prompt not found", { status: 404 });
    }

    // Update the prompt with new data
    existingJoke.joke = joke;
    existingJoke.tag = tag;

    await existingJoke.save();

    return new Response("Successfully updated the Joke", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Joke", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Joke.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting joke", { status: 500 });
  }
};
