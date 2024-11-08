<?php

namespace Kanboard\Plugin\RCB;

use Kanboard\Core\Plugin\Base;
use Kanboard\Core\Translator;

class Plugin extends Base
{
    public function initialize()
    {
        $this->hook->on('template:layout:css', array('template' => 'plugins/RCB/Assets/css/style.css'));
        $this->hook->on('template:layout:js', array('template' => 'plugins/RCB/Assets/js/function.js'));
    }

    public function onStartup()
    {
        Translator::load($this->languageModel->getCurrentLanguage(), __DIR__.'/Locale');
    }

    public function getPluginName()
    {
        return 'Resizable codeblocks';
    }

    public function getPluginDescription()
    {
        return t('Make codeblocks resizable, scrollable and limit their initial height to 200 pixels');
    }

    public function getPluginAuthor()
    {
        return 'Tomas Dittmann';
    }

    public function getPluginVersion()
    {
        return '1.1.0';
    }
    
    public function getPluginHomepage()
    {
        return "https://github.com/Chaosmeister/RCB";
    }
}
