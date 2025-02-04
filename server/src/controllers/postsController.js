import Posts from "../models/Posts.js";

export const getPosts = async (req, res) => {
  try {
    const post = await Posts.findOne({ id: req.query.id });
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({
        error: "Post not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const getPaginatedPosts = async (req, res) => {
  let { step = 1, limit = 50 } = req.query; // Default: step 1, 50 items per step
  step = parseInt(step);
  limit = parseInt(limit);

  if (limit >= 100) {
    limit = 100;
  }

  try {
    const posts = await Posts.find()
      .skip((step - 1) * limit) // Skip previous steps
      .limit(limit); // Limit the number of results

    const totalPosts = await posts.countDocuments(); // Total count for reference

    res.send({
      totalPosts,
      totalSteps: Math.ceil(totalPosts / limit),
      currentStep: step,
      data: posts,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Posts(req.body);
    await post.save();
    res.send({
      message: "Post created successfully!",
      data: post,
    });
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Posts.findOne({ id: req.body.id });
    if (post) {
      await post.updateOne(req.body);
      await post.save();
      res.send({
        message: "Post updated successfully!",
        data: post,
      });
    } else {
      res.status(404).send({
        error: "Post not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Posts.findOne({ id: req.query.id });
    if (post) {
      await post.deleteOne(post);
      res.send({
        message: "Post deleted successfully!",
        data: post,
      });
    } else {
      res.status(404).send({
        error: "Post not found!",
      });
    }
  } catch (error) {
    res.status(500).send({
      error: "Internal server error!",
    });
  }
};
