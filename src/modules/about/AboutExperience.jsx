import { experienceList } from '@src/data'
import { ExperienceItem } from '@src/modules/about'
import { SectionHeading } from '@src/ui/components'
import React, { useState } from 'react'
import styled from 'styled-components'

const Experiences = styled.div`
  display: flex;
  justify-content: center;
`

export const AboutExperience = () => {
  const [experienceToShow] = useState(experienceList[0])

  return (
    <section>
      <SectionHeading center title='My Experience' />
      <Experiences>
        <ExperienceItem experience={experienceToShow} />
      </Experiences>
    </section>
  )
}
