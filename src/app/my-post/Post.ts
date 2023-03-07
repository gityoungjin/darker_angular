export interface Post {
    id?: number;
    title: string;
    content: string;
    likes?: number;
}

export const Posts: Post[] = [
    {
        title: 'Post 111111111111111111111111111111',
        content: 'Post 1 content'
    },
    {
        title: 'Post 2',
        content: 'Post 2 content'
    },
    {
        title: 'Post 33333333333333333333333333333333',
        content: 'Post 3 content'
    }
];
