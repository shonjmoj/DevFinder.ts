import {useEffect, useState} from 'react'

export interface test {
    name: string;
    avatar_url: string;
    login: string;
    bio: string;
    location: string;
    blog: string;
    public_repos: number;
    following: number;
    followers: number;
    twitter_username: string;
}

export default function useFetch(value: string) {
    const [user, setUser] =  useState();
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        if (!value || value === 'undefined') return;
        fetch(`https://api.github.com/users/${value}`)
            .then(res => res.json())
            .then(data => {
                setIsloading(true);
                setUser(data)
                setIsloading(false);
            })
    },[value])

    return (
        {user, isLoading}
    )
}