import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons() {
  return (
    <div className='d-flex justify-center gap-1'>
      <Button variant='primary'>Lưu</Button>
      <Button variant='secondary'>Hủy</Button>
      <Button variant='success'>Thành công</Button>
      <Button variant='warning'>Cảnh báo</Button>
      <Button variant='danger'>Báo lỗi</Button>
      <Button variant='info'>Thông tin</Button>
      <Button variant='link'>Đường dẫn</Button>
    </div>
  )
}
