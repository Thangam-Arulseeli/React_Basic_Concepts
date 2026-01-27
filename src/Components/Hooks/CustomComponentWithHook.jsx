function ScreenInfo() {
  const width = useWindowWidth();

  return (
    <h3>
      Screen Size: {width < 600 ? "Mobile" : "Desktop"}
    </h3>
  );
}
