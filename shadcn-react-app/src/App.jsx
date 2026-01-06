import FeedbackForm from "./FeedbackForm"
import ImageSlideshow from "./ImageSlideshow"
import TodoApp from "./TodoApp"

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  )
}
