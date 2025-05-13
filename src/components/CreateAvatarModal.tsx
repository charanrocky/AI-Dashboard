type Props = {
  onClose: () => void;
};

const CreateAvatarModal = ({ onClose }: Props) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-11/12 max-w-md shadow-xl">
      <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
      <p className="text-gray-600 mb-6">This is just a placeholder modal.</p>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default CreateAvatarModal;
