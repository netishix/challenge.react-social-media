import axios from 'axios';
import IComment from '../interfaces/IComment';
import { API_URL } from '../constants';

export default class CommentService {
  static async getCommentsByPost(postId: number): Promise<IComment[]> {
    const url = `${API_URL}/posts/${postId}/comments`;
    const response = await axios.get(url);
    return response.data;
  }
}
