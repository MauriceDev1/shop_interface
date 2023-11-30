import { AccessTime24Regular, Box24Regular, Mail24Regular, MailRead24Regular, ShareScreenPerson24Regular, TaskListSquareAdd24Regular } from "@fluentui/react-icons";
import IconBox from "../components/IconBox";

function Home() {
  const data = [
    {
      id: 1,
      color: "#b6b690",
      icon: <AccessTime24Regular className="text-white w-12 h-12"/>,
      label: "KPI's"
    },
    {
      id: 2,
      color: "#debfc6",
      icon: <MailRead24Regular className="text-white w-12 h-12"/>,
      label: "Dayforce"
    },
    {
      id: 3,
      color: "#d29f91",
      icon: <Mail24Regular className="text-white w-12 h-12"/>,
      label: "Email"
    },
    {
      id: 4,
      color: "#b6b690",
      icon: <Box24Regular className="text-white w-12 h-12"/>,
      label: "OneStock"
    },
    {
      id: 5,
      color: "#debfc6",
      icon: <ShareScreenPerson24Regular className="text-white w-12 h-12"/>,
      label: "Fuse/HR"
    },
    {
      id: 6,
      color: "#d29f91",
      icon: <TaskListSquareAdd24Regular className="text-white w-12 h-12"/>,
      label: "Yoobick"
    }
  ]
  return (
      <div className="w-full py-5">
        <div className="w-8/12 py-2 m-auto justify-center flex flex-wrap">
          {data.map((d) => 
            <IconBox 
              key={d.id}
              color={d.color}
              icon={d.icon}
              label={d.label}
            />
          )}
        </div>  
      </div>
  );
}

export default Home
