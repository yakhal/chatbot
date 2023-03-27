export default function Chatlayout({ children }: any) {
  return (
    <>
      <div className="p-5 bg-white rounded-3xl space-y-4 text-gray-800 flex flex-col justify-between h-[100%] overflow-scroll scrollbar-hide                                                                                                        ">
        {children}
      </div>
    </>
  )
}
