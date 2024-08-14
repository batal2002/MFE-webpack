export const UserCard = ({ username }: { username?: string }) => {
  return (
    <div style={{ border: "1px solid green" }}>
      username: {username ?? "user"}
    </div>
  );
};
