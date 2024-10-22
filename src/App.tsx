import React from "react";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import ReactLazyExample from "./components/ReactLazyExample";
import AvoidInlineFunctionExample from "./components/AvoidInlineFunctionExample";
import ImmutableDataExample from "./components/ImmutableDataExample";
import ReactMemoExample from "./components/ReactMemoExample";
import UseFunctionInSetStateExample from "./components/UseFunctionInSetStateExample";
import KeyCoordinationListRenderingExample from "./components/KeyCoordinationListRenderingExample";
import PureComponentExample from "./components/PureComponentExample";
import LazyLoadingImagesExample from "./components/LazyLoadingImagesExample";

const App: React.FC = () => {
  
  return (
    <>
      <h1>React Performance Optimizations</h1>
      <ReactMemoExample />
      <UseMemoExample />
      <UseCallbackExample />
      <ReactLazyExample />
      <AvoidInlineFunctionExample />
      <ImmutableDataExample />
      <UseFunctionInSetStateExample />
      <KeyCoordinationListRenderingExample />
      <PureComponentExample message="greetings from class component!"/>
      <LazyLoadingImagesExample />
    </>
  );
};

export default App;
