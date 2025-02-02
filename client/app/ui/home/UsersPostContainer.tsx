import { UserPost } from "./UserPost";

export const UsersPostContainer = () => {
  // dummy users post
  const userPostsData = [
    {
      id: 1,
      name: "Hinata Higuyen",
      userImg:
        "https://www.waifu.com.mx/wp-content/uploads/elementor/thumbs/Hinata-Hyuga-Cover-q6vcrqnzrh03nyd8mmi87ai7theg8un9sf5n1fx5kg.jpg",
      message: "Graphics Designer and Marketing Specialist",
      time: "22 April, 3:43 AM",
      description: `Lorem ipsum dolor sit amet consectetur. Volutpat diam egestas felis urna aliquet hendrerit egestas. Pharetra amet non congue natoque in risus sit id. Iaculis est scelerisque bibendum tellus nibh semper. Sit quis risus dolor tortor.`,
      images: [
        "https://www.waifu.com.mx/wp-content/uploads/elementor/thumbs/Hinata-Hyuga-Cover-q6vcrqnzrh03nyd8mmi87ai7theg8un9sf5n1fx5kg.jpg",
        "https://staticg.sportskeeda.com/editor/2022/09/e6fd1-16626714927177-1920.jpg?w=640",
        "https://pbs.twimg.com/media/ElhZ_U3W0CMKZ0D?format=jpg&name=large",
      ],
      likeCount: 152,
      comments: 15,
      share: 3,
    },
    {
      id: 2,
      name: "Uzumaki Naruto",
      userImg:
        "https://mrwallpaper.com/images/hd/anime-naruto-holding-ninja-knife-dv3cqw2dgcbwupwx.jpg",
      message: "Graphics Designer and Marketing Specialist",
      time: "22 April, 3:43 AM",
      description: `Lorem ipsum dolor sit amet consectetur. Volutpat diam egestas felis urna aliquet hendrerit egestas. Pharetra amet non congue natoque in risus sit id. Iaculis est scelerisque bibendum tellus nibh semper. Sit quis risus dolor tortor.`,
      likeCount: 152,
      comments: 15,
      share: 3,
    },
  ];

  return (
    <div className="w-full max-w-2xl overflow-y-scroll scroll-bar-none users-post">
      {userPostsData.map(
        ({
          id,
          name,
          userImg,
          message,
          time,
          comments,
          description,
          likeCount,
          share,
          images,
        }) => {
          return (
            <UserPost
              key={id}
              name={name}
              userImg={userImg}
              message={message}
              time={time}
              comments={comments}
              description={description}
              likeCount={likeCount}
              share={share}
              images={images || []}
            />
          );
        }
      )}
    </div>
  );
};

// Todos:
// Make page responsive
