<?php
class We7-routerModuleWxapp extends WeModuleWxapp{
    public function doPageTest()
    {
        global $_GPC, $_W;
        $errno = 0;
        $message = '返回消息';
        $data = array();
        return $this->result($errno, $message, $data);
    }
    public function result($errno, $message, $data = '')
    {
        exit(json_encode(array(
            'errno' => $errno,
            'message' => $message,
            'data' => $data,
        )));
    }
}