const ImageModal = ({ onClose, children, animationModal }) => {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-none">
        <div className="fixed inset-0 backdrop-blur-sm bg-none" onClick={onClose}></div>
        <div className={`z-50 p-4 ${animationModal}`}>
          {children}
        </div>
      </div>
    );
  };
  
  export default ImageModal;
  