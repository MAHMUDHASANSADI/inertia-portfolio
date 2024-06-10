<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\HomeModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function list()
    {
        $data['getRecord'] = HomeModel::getRecord();
        $data['header_title'] = 'Category List';
        return view('admin.slider.list', $data);
    }
    public function add()
    {
        $data['header_title'] = 'Add New Category';
        return view('admin.slider.add', $data);
    }

    public function insert(Request $request)
    {
        request()->validate([
            'slug' => 'required|unique:category'
        ]);

        $slider = new HomeModel;
        $slider->image = trim($request-> image);
      
        $slider->save();

        return redirect('admin/slider/list')->with('success', "Category Successfully Created");
    }

    public function edit($id)
    {
        $data['getRecord'] = HomeModel::getSingle($id);
        $data['header_title'] = 'Add New Category';
        return view('admin.slider.edit', $data);
    }

    public function update($id, Request $request)
    {
        request()->validate([
            'slug' => 'required|unique:category,slug,' . $id
        ]);

        $slider = HomeModel::getSingle($id);
        $slider->name = trim($request->name);
        
        $slider->save();

        return redirect('admin/slider/list')->with('success', "Category Updated Created");
    }

    public function delete($id)
    {
        $slider = HomeModel::getSingle($id);
        $slider->is_delete =1;
        $slider->save();
        return redirect()->back()->with('error', "Category Successfully Deleted");
    }
}
