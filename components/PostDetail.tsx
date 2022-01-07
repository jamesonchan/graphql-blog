import React from 'react'
import { PostPropsType } from './PostCard';

interface PostDetailProps {
    post:PostPropsType
}

const PostDetail: React.FC<PostDetailProps> = ({post}) => {
        return (
            <div>post detail</div>
        );
}

export default PostDetail