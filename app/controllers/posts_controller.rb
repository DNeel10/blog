class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.turbo_stream
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  private

    def post_params
      params.require(:post).permit(:title, :body)
    end
end
