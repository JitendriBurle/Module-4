import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Button } from "./components/ui/button"

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [data, setData] = useState([])

  const submit = () => {
    if (!form.name || !form.email || !form.feedback) return
    setData([...data, form])
    setForm({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Name" value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Email" value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Textarea placeholder="Feedback" value={form.feedback}
          onChange={(e) => setForm({ ...form, feedback: e.target.value })} />
        <Button onClick={submit}>Submit</Button>

        {data.map((d, i) => (
          <div key={i} className="border-t pt-2 text-sm">
            <p><b>Name:</b> {d.name}</p>
            <p><b>Email:</b> {d.email}</p>
            <p><b>Feedback:</b> {d.feedback}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
