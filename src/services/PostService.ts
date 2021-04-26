import axios from 'axios';
import IPost from '../interfaces/IPost';
import { API_URL } from '../constants';

export default class PostService {
  static async getPosts(offset: number, limit: number): Promise<IPost[]> {
    const url = `${API_URL}/posts`;
    const response = await axios.get(url, {
      params: {
        _start: offset,
        _limit: limit,
      },
    });
    return response.data;
  }
}
