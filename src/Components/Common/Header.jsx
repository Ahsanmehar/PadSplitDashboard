function Header() {
  return (
    <div className="w-full h-full flex justify-between items-center bg-white px-[50px] shadow-[0px_2px_48px_0px_#0000000D]">
      <div>Logo</div>
      <div className="flex items-center gap-[8px]">
        <i className="bi bi-chat-left-text text-f2"></i>
        <i className="bi bi-bell-fill text-f2"></i>
        <img
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="Error-Image"
          className="w-[42px] h-[42px] border-blue border-[1px] rounded-[50%] ml-[10px]"
        />
      </div>
    </div>
  );
}

export default Header;
