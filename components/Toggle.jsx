import { useState } from 'react'
import { Switch } from '@headlessui/react'

function MyToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600 mx-2' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11 mx-2`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  )
}
export default MyToggle