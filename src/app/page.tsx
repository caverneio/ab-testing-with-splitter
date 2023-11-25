import { Experiment, Variant } from "splitter-gg";
import { ClickMeButton } from "./click-me-button";
import { LoveItButton } from "./love-it-button";

export default function Home() {
  return (
    <div className="text-center my-8">
      <h1 className="font-bold text-4xl mb-2">An AB Test</h1>
      <div className="my-4 space-y-2">
        <p>You should see either a red or a green button</p>
        <p>You should see the same button color for the next 24h</p>
      </div>
      <div className="mb-10">
        <Experiment name="landing-page-x">
          <Variant name="red-button">
            <ClickMeButton color="red" />
          </Variant>
          <Variant name="green-button">
            <ClickMeButton color="green" />
          </Variant>
        </Experiment>
      </div>
      <LoveItButton />
    </div>
  );
}
