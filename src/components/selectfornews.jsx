<Select 
              showSearch
              className="select-News"
              placeholder="Select Topic"
              optionFilterProp ="children"
              onChange={(value) => setNewsCatagory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase) > 0}
            >
              <Option value={'Cryptocurrency'}>Cryptocurrency</Option>
              {getCryptoNames?.data?.data?.coins?.map((coin) => (<Option value={coin.name}>{coin.name}</Option>))}
            </Select>