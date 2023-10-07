import Image from "next/image";
import { useRouter } from "next/navigation";

import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faIdCard, faAt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const redirectToUserPage = (login: string, router: AppRouterInstance) => {
  router.push(`/user/${login}`);
};

const UserLinkBox = ({ id, login, avatar_url, html_url }: UserLinkBoxProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col border min-w-[450px] border-gray-600 rounded-md cursor-pointer transition-shadow hover:shadow-sm hover:shadow-blue-500 active:scale-[1] hover:scale-[1.01] text-sm my-3">
      <Tooltip title="Click for detailed user page" placement="top" arrow>
        <div
          className="p-4"
          onClick={() => {
            redirectToUserPage(login, router);
          }}
        >
          <div className="flex justify-between mb-2">
            <div>
              <Image
                className="rounded-full border border-gray-600"
                src={avatar_url}
                alt="avatar"
                width={56}
                height={56}
              ></Image>
            </div>
            <div className="flex justify-center items-center ">
              <FontAwesomeIcon icon={faGithub} className="w-10 h-10" />
            </div>
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faIdCard} className="w-4 h-4 mr-4" />
            <span>{`Id: #${id}`}</span>
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faAt} className="w-4 h-4 mr-4" />
            <span>{login}</span>
          </div>
          <div className="py-1">
            <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-4" />
            <span>
              <a
                className="hover:underline hover:text-blue-300"
                href={html_url}
                target="_blank"
                rel="noopener"
              >
                {html_url}
              </a>
            </span>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default UserLinkBox;

type UserLinkBoxProps = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};
