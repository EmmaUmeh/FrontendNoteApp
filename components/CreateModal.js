


export default function CreateModal({ onCancel }) {
    return (
      <>
        <div className="w-72 fixed right-20 pb-8 top-40 bg-white shadow-md border-1 border-[#E0E0E0] rounded-lg">
          <div className="flex items-center justify-between mb-5 bg-[#e9ecef] rounded-t-lg py-3 px-3">
            <h4 className="flex-grow font-bold text-[#2b2d42]">Add Notes</h4>
  
            <span className="text-4xl cursor-pointer font-light text-right text-[#2b2d42]" onClick={onCancel}>
              &times;
            </span>
          </div>

            <div className="px-3">
                <form>
                    <div>
                        <input type="text" placeholder="Title" className="text-black text-sm w-full border-b-2 border-[#E0E0E0 focus:outline-none focus:border-[#E0E0E0] focus:border-[#E0E0E0]"/>
                    </div>

                    {/* <div className="mt-2">
                        <input type="text" placeholder="Subject" className="text-black w-full border-b-2 border-[#E0E0E0 focus:outline-none focus:border-[#E0E0E0] focus:border-[#E0E0E0]"/>
                    </div> */}

                    <div className="mt-5">
                        <textarea placeholder="Write your text body here..." className="text-black text-sm w-full border-b-2 border-[#E0E0E0 focus:outline-none focus:border-[#E0E0E0] focus:border-[#E0E0E0] pb-48">

                        </textarea>
                    </div>

                    <div className="mt-3">
                        <button type="submit" className="w-full rounded-lg bg-[#0085ff] font-semibold text-white text-sm py-2 px-2">Create Task</button>
                    </div>

                </form>
            </div>
        </div>
      </>
    );
  }
  