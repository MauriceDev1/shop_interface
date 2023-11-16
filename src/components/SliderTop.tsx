import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Button from "./common/Button"

export default function SliderTop() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Button title={"Link"} />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Button title={"Link"} />
      </div>
      <div className="keen-slider__slide number-slide3">
        <Button title={"Link"} />
      </div>
      <div className="keen-slider__slide number-slide4">
        <Button title={"Link"} />
      </div>
      <div className="keen-slider__slide number-slide5">
        <Button title={"Link"} />
      </div>
      <div className="keen-slider__slide number-slide6">
        <Button title={"Link"} />
      </div>
    </div>
  )
}