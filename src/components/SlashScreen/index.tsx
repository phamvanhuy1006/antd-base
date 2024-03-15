import LinearProgress from "../LinearProgress";

const SlashScreen: () => JSX.Element = () => {
  return (
    <div className="flex items-center justify-center z-50 inset-0 fixed">
      <LinearProgress />
    </div>
  );
};

export default SlashScreen;
