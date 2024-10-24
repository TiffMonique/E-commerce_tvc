import React from 'react'
import { FormattedDateTimeOptions } from '../interfaces/formattedDateTime';
import { useFormattedDateTime } from '../hooks/useFormattedDate';


interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  dateTime: Date,
  options?: FormattedDateTimeOptions
  style?: React.CSSProperties,
  className?: string,
}

export const FormattedDate = ({ dateTime, options, ...props }: Props) => {
  const formatter = useFormattedDateTime(options);

  return (
    <React.Fragment>
      <span className={props.className} style={props.style}>{formatter(dateTime)}</span>
    </React.Fragment>
  )
}