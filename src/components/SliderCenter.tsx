import * as React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import IconBox from "./common/IconBox"

export default function SliderCenter() {
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
        <IconBox />
      </div>
      <div className="keen-slider__slide number-slide2">
        <IconBox />
      </div>
      <div className="keen-slider__slide number-slide3">
        <IconBox />
      </div>
      <div className="keen-slider__slide number-slide4">
        <IconBox />
      </div>
      <div className="keen-slider__slide number-slide5">
        <IconBox />
      </div>
      <div className="keen-slider__slide number-slide6">
        <IconBox />
      </div>
    </div>
  )
}