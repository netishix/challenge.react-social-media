import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PostThumbnail } from './components';
import IPost from '../../interfaces/IPost';
import PostService from '../../services/PostService';
import { LOAD_POSTS_PER_QUERY } from '../../constants';

interface FeedPageState {
  isLoadingPosts: boolean;
  currentOffset: number;
  finishedLoadingPosts: boolean;
  posts: IPost[]
}

export default class FeedPage extends Component<{}, FeedPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      finishedLoadingPosts: false,
      isLoadingPosts: false,
      currentOffset: 0,
      posts: [],
    }
    this.loadMorePosts = this.loadMorePosts.bind(this);
  }

  async componentDidMount(): Promise<void> {
    await this.loadMorePosts();
  }

  async loadMorePosts() {
    this.setState({ isLoadingPosts: true });
    const { currentOffset, posts } = this.state;
    const newPosts = await PostService.getPosts(currentOffset, LOAD_POSTS_PER_QUERY);
    const allPosts = [...posts, ...newPosts];
    const finishedLoadingPosts = newPosts.length === 0;
    this.setState({
      isLoadingPosts: false,
      currentOffset: currentOffset + LOAD_POSTS_PER_QUERY,
      finishedLoadingPosts,
      posts: allPosts,
    });
  }

  render() {
    const { isLoadingPosts, finishedLoadingPosts, posts } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                {/* <h3>Spark Feed</h3> */}
              </div>
            </div>
            <div className="row">
              {
                  posts.map((post) => <PostThumbnail key={post.id} post={post} />)
                }
            </div>
            {
              !finishedLoadingPosts ? (
                <div className="row">
                  <div className="col-12 text-center">
                    {
                      isLoadingPosts
                        ? (
                          <div>
                            <FontAwesomeIcon icon={faSpinner} className="mr-2" spin />
                            <span>Loading...</span>
                          </div>
                        )
                        : (
                          <button className="btn btn-outline-info" type="button" onClick={this.loadMorePosts}>
                            Load more
                          </button>
                        )
                    }
                  </div>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}
