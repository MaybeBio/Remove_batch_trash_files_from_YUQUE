(function() {
    // 设置循环间隔时间（毫秒）
    const delayBetweenActions = 1000; // 1秒
    const delayAfterDelete = 500;    // 删除后等待0.5秒
    
    function performDeletion() {
        // 查找"彻底删除"按钮
        const deleteButton = document.querySelector('a[data-testid="recycles-remove-button"][class="RecycleTable-module_normal_N-qK2"]');
        
        if (deleteButton) {
            console.log("找到删除按钮，准备点击...");
            deleteButton.click();
            
            // 等待一段时间后查找并点击确定按钮
            setTimeout(() => {
                const confirmButton = document.querySelector('.ant-popover-buttons .ant-btn-primary.ant-btn-sm');
                
                if (confirmButton) {
                    console.log("找到确定按钮，准备点击...");
                    confirmButton.click();
                    console.log("已点击确定按钮");
                    
                    // 再次等待后重复过程
                    setTimeout(performDeletion, delayBetweenActions);
                } else {
                    console.log("未找到确定按钮");
                    setTimeout(performDeletion, delayBetweenActions);
                }
            }, delayAfterDelete);
        } else {
            console.log("未找到删除按钮");
            // 如果没找到删除按钮，稍后重试
            setTimeout(performDeletion, delayBetweenActions);
        }
    }
    
    // 开始执行
    console.log("开始执行删除操作...");
    performDeletion();
})();
