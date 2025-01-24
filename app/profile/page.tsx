'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();
  const level = 0;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <img src={user.picture ?? ""} alt={user.name ?? ""} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}