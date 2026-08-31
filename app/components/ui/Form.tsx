import React from 'react'
import Image from 'next/image'
import type { IconType } from 'react-icons'
import {
  LuBaby,
  LuCalendarDays,
  LuLock,
  LuMail,
  LuPhone,
  LuUser,
} from 'react-icons/lu'
import './Styles.css'

type FieldTone = 'blue' | 'orange' | 'green' | 'purple'

type Field = {
  label: string
  placeholder: string
  tone: FieldTone
  Icon: IconType
  actionIcon?: IconType
  type: string
}

const fields: Field[] = [
  {
    label: "Child's name",
    placeholder: "Enter child's name",
    tone: 'blue',
    Icon: LuUser,
    type: 'text',
  },
  {
    label: 'Date of Birth',
    placeholder: 'Select date of birth',
    tone: 'orange',
    Icon: LuBaby,
    actionIcon: LuCalendarDays,
    type: 'text',
  },
  {
    label: 'Mobile number',
    placeholder: 'Enter mobile number',
    tone: 'green',
    Icon: LuPhone,
    type: 'tel',
  },
  {
    label: 'Email address',
    placeholder: 'Enter email address',
    tone: 'purple',
    Icon: LuMail,
    type: 'email',
  },
]

type FormProps = {
  width?: string
}

const Form = ({ width = 'min(100%, 680px)' }: FormProps) => {
  return (
    <div
      className="form-container"
      style={{ '--form-width': width } as React.CSSProperties}
    >
      <div className="form-data">
        <div className="form-date-header">
          <div className="form-data-badge-icon" aria-hidden="true">
            <Image
              src="/icons/sparkle-left.png"
              width={30}
              height={30}
              alt=""
            />
          </div>

          <h4>Fill Your Child&apos;s Information</h4>

          <div className="form-data-badge-icon" aria-hidden="true">
            <Image src="/icons/sparkle.png" width={30} height={30} alt="" />
          </div>
        </div>

        <form className="form-fields">
          {fields.map((field) => {
            const FieldIcon = field.Icon
            const ActionIcon = field.actionIcon

            return (
              <label key={field.label} className="field-group">
                <span className={`icon-box bg-${field.tone}`} aria-hidden="true">
                  <FieldIcon aria-hidden="true" />
                </span>

                <span className="input-content">
                  <span className="input-label">{field.label}</span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.label}
                  />
                </span>

                {ActionIcon ? (
                  <span className="action-icon" aria-hidden="true">
                    <ActionIcon aria-hidden="true" />
                  </span>
                ) : (
                  <span className="action-icon" aria-hidden="true" />
                )}
              </label>
            )
          })}
        </form>

        <div className="security-banner">
          <div className="lock-container" aria-hidden="true">
            <LuLock aria-hidden="true" />
          </div>

          <p>
            We keep your child&apos;s information safe, ensuring privacy and
            protection.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Form
